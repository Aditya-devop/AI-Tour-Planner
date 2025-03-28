export const SelectTravelsList = [
    {
        id: 1,
        title: "Solo Explorer",
        desc: "Just you, your backpack, and the open road",
        icon: "🧳",
        people: "1 person",
    },
    {
        id: 2,
        title: "Dynamic Duo",
        desc: "Perfect for couples on an adventure",
        icon: "🤝",
        people: "2 people",
    },
    {
        id: 3,
        title: "Family Time",
        desc: "A fun-filled trip for 3–5 travelers",
        icon: "👨‍👩‍👧‍👦",
        people: "3 to 5 people",
    },
    {
        id: 4,
        title: "Friends' Getaway",
        desc: "A squad of 5–10 thrill seekers",
        icon: "👥",
        people: "5 to 10 people",
    },
];


export const SelectBudgetOptions = [
    {
        id: 1,
        title: "Backpacker",
        desc: "Low-cost, flexible, and adventurous",
        icon: "🎒"
    },
    {
        id: 2,
        title: "Explorer",
        desc: "Balanced spending for a well-rounded journey",
        icon: "🧭"
    },
    {
        id: 3,
        title: "First Class",
        desc: "Indulge in comfort and premium perks",
        icon: "✈️"
    },
];


export const AI_Prompt = `Generate Travel Plan for Location:{location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.`;