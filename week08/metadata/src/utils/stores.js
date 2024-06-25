export const chololateBars = [
    {
        "id": 1,
        "name": "Cadbury Dairy Milk",
        "slug": "cadbury-diary-milk",
        "history": "Introduced in 1905 by Cadbury, originally advertised as containing a glass and a half of milk. It quickly became one of the most popular chocolate bars in the UK."
    },
    {
        "id": 2,
        "name": "Mars Bar",
        "slug": "mars-bar",
        "history": "Launched in 1932 in Slough, England, the Mars Bar includes nougat and caramel covered in milk chocolate. It was modeled after the Milky Way bar available in the US at the time."
    },
    {
        "id": 3,
        "name": "Kit Kat",
        "slug": "kit-kat",
        "history": "First produced by Rowntree's of York in 1935 and now manufactured by Nestlé. It originally launched under the name 'Chocolate Crisp' but was renamed to Kit Kat after World War II."
    },
    {
        "id": 4,
        "name": "Twirl",
        "slug": "twirl",
        "history": "Twirl bars, consisting of two flake-style bars covered in milk chocolate, were first released by Cadbury in the early 1980s and have been a favorite for their unique texture."
    },
    {
        "id": 5,
        "name": "Snickers",
        "slug": "snickers",
        "history": "Originally introduced in 1930 under the name 'Marathon' in the UK, the Snickers bar comprises nougat topped with caramel and peanuts, enrobed in milk chocolate. It officially switched to the global brand name 'Snickers' in 1990."
    },
    {
        "id": 6,
        "name": "Aero",
        "slug": "aero",
        "history": "First introduced in 1935 by Rowntree's, Aero is known for its distinctive bubbly texture. This chocolate bar was initially promoted with the slogan 'The chocolate that's different inside.'"
    },
    {
        "id": 7,
        "name": "Bounty",
        "slug": "bounty",
        "history": "Introduced in 1951, Bounty is a coconut filled chocolate bar. It has a distinctive tropical flavor that sets it apart from other UK chocolate bars, often found with either a dark or milk chocolate coating."
    },
    {
        "id": 8,
        "name": "Flake",
        "slug": "flake",
        "history": "Developed in 1920, when a Cadbury employee noticed thin streams of excess chocolate falling from molds cooled into flaky bars. It is famously marketed as 'the crumbliest, flakiest milk chocolate.'"
    },
    {
        "id": 9,
        "name": "Galaxy",
        "slug": "galaxy",
        "history": "Known as Dove in some markets, Galaxy was introduced in the UK in 1960 by Mars. It is marketed for its smooth and creamy texture, which differentiates it from other chocolate bars."
    },
    {
        "id": 10,
        "name": "Lion Bar",
        "slug": "lion-bar",
        "history": "Produced by Nestlé, the Lion Bar was introduced in the 1970s. It features a filled wafer, caramel, and crisp cereal covered in chocolate, offering a multi-textural eating experience."
    }
]

export function findChocoBySlug(slug) {
    return chololateBars.find((bar) => bar.slug === slug)
}