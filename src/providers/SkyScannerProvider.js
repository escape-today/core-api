import rp from "request-promise-native"
import environment from "node-env-file"

export default class SkyScannerProvider
{
    constructor() {
        let env = environment(".env")
        this.api_key = env.SKYSCANNERFLIGHTSKEY
        this.base_url = env.SKYSCANNERFLIGHTURL
    }

    getFlight(from, to) {

        let fromId
        let toId
        
        return this.getId(from).then( (res) => {
            fromId = res.Places[0].PlaceId
            return this.getId(to)
        }).then( (res) => {
            toId = res.Places[0].PlaceId
            let options = {
                uri: this.base_url + "browsequotes/v1.0/UK/gbp/en-GB/" + fromId + "/" + toId + "/anytime/anytime?apikey=" + this.api_key,
                json: true
            }
            console.log(options.uri)
            return rp(options)
        })
    }

    getId(query) {
        let options = {
            uri: this.base_url + "autosuggest/v1.0/UK/GBP/en_GB?query=" + query + "&apiKey=" + this.api_key,
            json: true
        }
        console.log(options.uri)
        return rp(options)
    }

    reMapQuotes(data) {
        let quotes = data.Quotes
        let places = data.Places
        let carriers = data.Carriers

        let quotes_with_carrier_names = quotes.map( (item) => { // Maping item to a formatted item
            let list_of_outbound_names = item.OutboundLeg.CarrierIds.map( ( item_carrier_id ) => {  // Maping outbound carrier ids to respscitve names
                for (let carrier in carriers) { // loop through carriers to find matching id
                    let carrier_data = carriers[carrier]
                    if (carrier_data.CarrierId == item_carrier_id) { // check for match
                        return carrier_data.Name // return matched name
                    }
                }
                return "Unknown Carrier" // default carrier name
            })
            item.OutboundLeg.Carriers = list_of_outbound_names // Set names

            let list_of_inbound_names = item.InboundLeg.CarrierIds.map((item_carrier_id) => {  // Maping inbound carrier ids to respscitve names
                for (let carrier in carriers) { // loop through carriers to find matching id
                    let carrier_data = carriers[carrier]
                    if (carrier_data.CarrierId == item_carrier_id) { // check for match
                        return carrier_data.Name // return matched name
                    }
                }
                return "Unknown Carrier" // default carrier name
            })
            item.InboundLeg.Carriers = list_of_inbound_names // Set names

            return item // return formatted item
        })
        
        let quotes_with_place_names = quotes_with_carrier_names.map( (item) => { // Mapping item to formatted item with place name
            
            item.OutboundLeg.Origin = "Unknown Place" // default if no matching place id
            item.OutboundLeg.Destination = "Unknown Place" // default if no matching place id
            item.InboundLeg.Origin = "Unknown Place" // default if no matching place id
            item.InboundLeg.Destination = "Unknown Place" // default if no matching place id

            for (let place in places) { // loop through places to find mathcing id
                let place_data = places[place]

                if(place_data.PlaceId == item.OutboundLeg.OriginId) { // check for matching place id (Outbound Origin)
                    item.OutboundLeg.Origin = place_data.Name
                }
                if (place_data.PlaceId == item.OutboundLeg.DestinationId) { // check for matching place id (Outbound Destination)
                    item.OutboundLeg.Destination = place_data.Name
                }
                if (place_data.PlaceId == item.InboundLeg.OriginId) { // check for matching place id (Inbound Origin)
                    item.InboundLeg.Origin = place_data.Name
                }
                if (place_data.PlaceId == item.InboundLeg.DestinationId) { // check for matching place id (Inbound Destination)
                    item.InboundLeg.Destination = place_data.Name
                }
            }
            return item
        })

        return quotes_with_place_names
    }
}
