import populationProvider from "./PopulationProvider"
import environment from "node-env-file"

export default class WeightsProvider
{
    constructor() {
        let env = environment(".env")
        this.population_weight = env.POPULATIONWEIGHT
        this.zombies_weight = env.ZOMBIESWEIGHT
        this.getZombieData()
        this.HDI = {
            "Afghanistan": 0.479,
            "Albania": 0.764,
            "Algeria": 0.745,
            "Andorra": 0.858,
            "Angola": 0.533,
            "Antigua and Barbuda": 0.786,
            "Argentina": 0.827,
            "Armenia": 0.743,
            "Australia": 0.939,
            "Austria": 0.893,
            "Azerbaijan": 0.759,
            "Bahamas": 0.792,
            "Bahrain": 0.824,
            "Bangladesh": 0.579,
            "Barbados": 0.795,
            "Belarus": 0.796,
            "Belgium": 0.896,
            "Belize": 0.706,
            "Benin": 0.485,
            "Bhutan": 0.607,
            "Bolivia (Plurinational State of)": 0.674,
            "Bosnia and Herzegovina": 0.75,
            "Botswana": 0.698,
            "Brazil": 0.754,
            "Brunei Darussalam": 0.865,
            "Bulgaria": 0.794,
            "Burkina Faso": 0.402,
            "Burundi": 0.404,
            "Cabo Verde": 0.648,
            "Cambodia": 0.563,
            "Cameroon": 0.518,
            "Canada": 0.92,
            "Central African Republic": 0.352,
            "Chad": 0.396,
            "Chile": 0.847,
            "China": 0.738,
            "Colombia": 0.727,
            "Comoros": 0.498,
            "Congo": 0.592,
            "Congo (Democratic Republic of the)": 0.435,
            "Costa Rica": 0.776,
            "Croatia": 0.827,
            "Cuba": 0.775,
            "Cyprus": 0.856,
            "Czech Republic": 0.878,
            "C�te d'Ivoire": 0.474,
            "Denmark": 0.925,
            "Djibouti": 0.473,
            "Dominica": 0.726,
            "Dominican Republic": 0.722,
            "Ecuador": 0.739,
            "Egypt": 0.691,
            "El Salvador": 0.68,
            "Equatorial Guinea": 0.592,
            "Eritrea": 0.42,
            "Estonia": 0.865,
            "Ethiopia": 0.448,
            "Fiji": 0.736,
            "Finland": 0.895,
            "France": 0.897,
            "Gabon": 0.697,
            "Gambia": 0.452,
            "Georgia": 0.769,
            "Germany": 0.926,
            "Ghana": 0.579,
            "Greece": 0.866,
            "Grenada": 0.754,
            "Guatemala": 0.64,
            "Guinea": 0.414,
            "Guinea-Bissau": 0.424,
            "Guyana": 0.638,
            "Haiti": 0.493,
            "Honduras": 0.625,
            "Hong Kong" :0.917,
            "Hungary":0.836,
            "Iceland": 0.921,
            "India": 0.624,
            "Indonesia": 0.689,
            "Iran (Islamic Republic of)": 0.774,
            "Iraq": 0.649,
            "Ireland": 0.923,
            "Israel": 0.899,
            "Italy": 0.887,
            "Jamaica": 0.73,
            "Japan": 0.903,
            "Jordan": 0.742,
            "Kazakhstan": 0.794,
            "Kenya": 0.555,
            "Kiribati": 0.588,
            "Korea (Republic of)": 0.901,
            "Kuwait": 0.8,
            "Kyrgyzstan": 0.664,
            "Lao People's Democratic Republic": 0.586,
            "Latvia": 0.83,
            "Lebanon": 0.763,
            "Lesotho": 0.497,
            "Liberia": 0.427,
            "Libya": 0.716,
            "Liechtenstein": 0.912,
            "Lithuania": 0.848,
            "Luxembourg": 0.898,
            "Madagascar": 0.512,
            "Malawi": 0.476,
            "Malaysia": 0.789,
            "Maldives": 0.701,
            "Mali": 0.442,
            "Malta": 0.856,
            "Mauritania": 0.513,
            "Mauritius": 0.781,
            "Mexico": 0.762,
            "Micronesia (Federated States of)": 0.638,
            "Moldova (Republic of)": 0.699,
            "Mongolia": 0.735,
            "Montenegro": 0.807,
            "Morocco": 0.647,
            "Mozambique": 0.418,
            "Myanmar": 0.556,
            "Namibia": 0.64,
            "Nepal": 0.558,
            "Netherlands": 0.924,
            "New Zealand": 0.915,
            "Nicaragua": 0.645,
            "Niger": 0.353,
            "Nigeria": 0.527,
            "Norway": 0.949,
            "Oman": 0.796,
            "Pakistan": 0.55,
            "Palau": 0.788,
            "Papua New Guinea": 0.516,
            "Paraguay": 0.693,
            "Peru": 0.74,
            "Philippines": 0.682,
            "Poland": 0.855,
            "Portugal": 0.843,
            "Qatar": 0.856,
            "Romania": 0.802,
            "Russian Federation": 0.804,
            "Rwanda": 0.498,
            "Saint Kitts and Nevis": 0.765,
            "Saint Lucia": 0.735,
            "Saint Vincent and the Grenadines": 0.722,
            "Samoa": 0.704,
            "Sao Tome and Principe": 0.574,
            "Saudi Arabia": 0.847,
            "Senegal": 0.494,
            "Serbia": 0.776,
            "Seychelles": 0.782,
            "Sierra Leone": 0.42,
            "Singapore": 0.925,
            "Slovakia": 0.845,
            "Slovenia": 0.89,
            "Solomon Islands": 0.515,
            "South Africa": 0.666,
            "South Sudan": 0.418,
            "Spain": 0.884,
            "Sri Lanka": 0.766,
            "Sudan": 0.49,
            "Suriname": 0.725,
            "Swaziland": 0.541,
            "Sweden": 0.913,
            "Switzerland": 0.939,
            "Syrian Arab Republic": 0.536,
            "Tajikistan": 0.627,
            "Tanzania (United Republic of)": 0.531,
            "Thailand": 0.74,
            "The former Yugoslav Republic of Macedonia": 0.748,
            "Timor-Leste": 0.606,
            "Togo": 0.487,
            "Tonga": 0.721,
            "Trinidad and Tobago": 0.78,
            "Tunisia": 0.725,
            "Turkey": 0.767,
            "Turkmenistan": 0.692,
            "Uganda": 0.493,
            "Ukraine": 0.743,
            "United Arab Emirates": 0.84,
            "United Kingdom": 0.91,
            "United States": 0.92,
            "Uruguay": 0.795,
            "Uzbekistan": 0.701,
            "Vanuatu": 0.597,
            "Venezuela (Bolivarian Republic of)": 0.767,
            "Viet Nam": 0.683,
            "Yemen": 0.482,
            "Zambia": 0.579,
            "Zimbabwe": 0.516
        }
    }

    getZombieData() {
        this.zombieData = new populationProvider().zombieStatusAllCountresSync()
    }

    country(country) {
        let zombies
        for (let zombie_key in this.zombieData) {
            let zombie = this.zombieData[zombie_key]
            if(zombie.name == country) {
                zombies = zombie.status
            }
        }
        if(!zombies) { // if country doesn't match anything
            return false
        }
        let population = new populationProvider().population(country)
        let population_weighted = Math.floor(population * this.population_weight)
        let zombies_weighted = Math.floor(zombies * this.zombies_weight)
        let hdi = ((this.HDI[country]) ? this.HDI[country] : 0.5)
        let quotient = Math.floor((zombies_weighted + population_weighted)*hdi)

        return {
            country: country,
            population: population,
            zombies: zombies,
            hdi: hdi,
            quotient: quotient
        }
    }

    all() {
        let array_of_weights = []
        for (let i in new populationProvider().countries) {
            let country = new populationProvider().countries[i]
            array_of_weights.push(this.country(country))
        }
        return array_of_weights
    }
}