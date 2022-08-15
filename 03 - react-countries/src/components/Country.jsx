import Item from "./Item";

export default function Country({
    children: country = null,
    onCountryClick = null,
    isVisited = false,
}) {
    if (!country)
        return <div>Impossível renderizar o país.1</div>;

    function handleCountryClick() {
        if (onCountryClick) {
            onCountryClick(country.id);
        }
    }

    const demographicDensity = country.population / country.area;
    const {name, capital, region, population, area} = country;

    const isVisitedClassName = isVisited ? 'bg-green-100' : '';

    return (
        <div className={`border p-2 m-2 flex flex-row cursor-pointer ${isVisitedClassName}`}
            onClick={handleCountryClick}>
            <ul>
                <li><Item label="Nome:">{name}</Item></li>
                <li><Item label="Capital:">{capital}</Item></li>
                <li><Item label="Região:">{region}</Item></li>
                <li><Item label="População:">{population} habitantes</Item></li>
                <li><Item label="Área:">{area}</Item> km<sup>2</sup></li>
                <li><Item label="Densidade demográfica:">{demographicDensity} hab./km<sup>2</sup></Item></li>
            </ul>
        </div>
    );
}