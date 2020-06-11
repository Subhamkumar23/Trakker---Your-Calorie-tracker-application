const data = [
    {
        "ID": "1",
        "Food": "Tea",
        "size": "1 cup",
        "fat( gms.)": "2.9",
        "Cholesterol( mgs)": "10.0",
        "calorie": "70.0",
        "protien( g)": "3.1",
        "carbs( g)": "8.3"
    },
    {
        "ID": "2",
        "Food": "Coffee",
        "size": "1 cup",
        "fat( gms.)": "2.9",
        "Cholesterol( mgs)": "10.0",
        "calorie": "164.0",
        "protien( g)": "4.4",
        "carbs( g)": "15.8"
    },
    {
        "ID": "3",
        "Food": "Beer, Regular",
        "size": "350 ml",
        "fat( gms.)": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "150.0",
        "protien( g)": "0.0",
        "carbs( g)": "9.0"
    },
    {
        "ID": "4",
        "Food": "kachori",
        "size": "1 small",
        "fat( gms.)": "15.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "200.0",
        "protien( g)": "4.0",
        "carbs( g)": "18.4"
    },
    {
        "ID": "5",
        "Food": "patty",
        "size": "1 piece",
        "fat( gms.)": "15.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "260.0",
        "protien( g)": "0.9",
        "carbs( g)": "10.2"
    },
    {
        "ID": "6",
        "Food": "samosa",
        "size": "1 big/ 65 gms",
        "fat( gms.)": "13.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "210.0",
        "protien( g)": "3.0",
        "carbs( g)": "22.6"
    },
    {
        "ID": "7",
        "Food": "Chat",
        "size": "1 plate ",
        "fat( gms.)": "12.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "210.0",
        "protien( g)": "11.0",
        "carbs( g)": "46.0"
    },
    {
        "ID": "8",
        "Food": "Namkeen",
        "size": "2 tsp",
        "fat( gms.)": "5.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "85.0",
        "protien( g)": "2.4",
        "carbs( g)": "7.0"
    },
    {
        "ID": "9",
        "Food": "Mathri",
        "size": "50 gms",
        "fat( gms.)": "15.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "200.0",
        "protien( g)": "2.4",
        "carbs( g)": "16.8"
    },
    {
        "ID": "10",
        "Food": "pizza",
        "size": "1 slice",
        "fat( gms.)": "2.1",
        "Cholesterol( mgs)": "15.0",
        "calorie": "150.0",
        "protien( g)": "10.0",
        "carbs( g)": "21.0"
    },
    {
        "ID": "11",
        "Food": "popcorn",
        "size": "1 cup",
        "fat( gms.)": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "25.0",
        "protien( g)": "0.8",
        "carbs( g)": "4.7"
    },
    {
        "ID": "12",
        "Food": "dhokla",
        "size": "1 piece",
        "fat( gms.)": "0.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "75.0",
        "protien( g)": "3.6",
        "carbs( g)": "8.4"
    },
    {
        "ID": "13",
        "Food": "milk( cow)",
        "size": "225 ml",
        "fat( gms.)": "8.2",
        "Cholesterol( mgs)": "28.0",
        "calorie": "134.0",
        "protien( g)": "7.0",
        "carbs( g)": "10.0"
    },
    {
        "ID": "14",
        "Food": "paneer",
        "size": "25 gms",
        "fat( gms.)": "6.5",
        "Cholesterol( mgs)": "22.3",
        "calorie": "80.0",
        "protien( g)": "4.6",
        "carbs( g)": "0.3"
    },
    {
        "ID": "15",
        "Food": "cheddar cheese",
        "size": "25 gm",
        "fat( gms.)": "8.3",
        "Cholesterol( mgs)": "26.0",
        "calorie": "102.5",
        "protien( g)": "6.8",
        "carbs( g)": "0.4"
    },
    {
        "ID": "16",
        "Food": "ice cream",
        "size": "100 gms",
        "fat( gms.)": "10.0",
        "Cholesterol( mgs)": "41.0",
        "calorie": "259.0",
        "protien( g)": "2.0",
        "carbs( g)": "21.5"
    },
    {
        "ID": "17",
        "Food": "roti",
        "size": "1 piece",
        "fat( gms.)": "0.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "85.0",
        "protien( g)": "3.0",
        "carbs( g)": "17.4"
    },
    {
        "ID": "18",
        "Food": "parantha",
        "size": "1 piece",
        "fat( gms.)": "10.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "180.0",
        "protien( g)": "4.5",
        "carbs( g)": "24.0"
    },
    {
        "ID": "19",
        "Food": "puri",
        "size": "1 piece",
        "fat( gms.)": "5.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "167.0",
        "protien( g)": "6.1",
        "carbs( g)": "34.7"
    },
    {
        "ID": "20",
        "Food": "Plain rice",
        "size": "100 gms",
        "fat( gms.)": "0.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "110.0",
        "protien( g)": "2.2",
        "carbs( g)": "22.2"
    },
    {
        "ID": "21",
        "Food": "Pulao rice",
        "size": "150 gms",
        "fat( gms.)": "10.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "180.0",
        "protien( g)": "5.2",
        "carbs( g)": "32.6"
    },
    {
        "ID": "22",
        "Food": "Kichri",
        "size": "100 gms",
        "fat( gms.)": "7.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "215.0",
        "protien( g)": "4.2",
        "carbs( g)": "25.4"
    },
    {
        "ID": "23",
        "Food": "Idli",
        "size": "2 pieces",
        "fat( gms.)": "0.6",
        "Cholesterol( mgs)": "0.0",
        "calorie": "155.0",
        "protien( g)": "5.0",
        "carbs( g)": "30.2"
    },
    {
        "ID": "24",
        "Food": "Dosa Plain",
        "size": "85 gms",
        "fat( gms.)": "7.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "154.0",
        "protien( g)": "3.6",
        "carbs( g)": "21.7"
    },
    {
        "ID": "25",
        "Food": "Upma",
        "size": "130 gms",
        "fat( gms.)": "9.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "171.0",
        "protien( g)": "4.4",
        "carbs( g)": "24.3"
    },
    {
        "ID": "26",
        "Food": "bread white",
        "size": "25 gms",
        "fat( gms.)": "0.1",
        "Cholesterol( mgs)": "0.0",
        "calorie": "54.0",
        "protien( g)": "1.7",
        "carbs( g)": "11.4"
    },
    {
        "ID": "27",
        "Food": "bread brown",
        "size": "25 gms",
        "fat( gms.)": "0.3",
        "Cholesterol( mgs)": "0.0",
        "calorie": "68.0",
        "protien( g)": "2.5",
        "carbs( g)": "13.7"
    },
    {
        "ID": "28",
        "Food": "corn flakes",
        "size": "20 gms",
        "fat( gms.)": "0.4",
        "Cholesterol( mgs)": "0.0",
        "calorie": "80.0",
        "protien( g)": "1.2",
        "carbs( g)": "20.1"
    },
    {
        "ID": "29",
        "Food": "potato curry",
        "size": "100 gms",
        "fat( gms.)": "6.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "120.0",
        "protien( g)": "1.8",
        "carbs( g)": "15.5"
    },
    {
        "ID": "30",
        "Food": "Onion",
        "size": "25 gms",
        "fat( gms.)": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "23.0",
        "protien( g)": "0.6",
        "carbs( g)": "4.9"
    },
    {
        "ID": "31",
        "Food": "mushroom",
        "size": "1/2 cup",
        "fat( gms.)": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "10.0",
        "protien( g)": "0.8",
        "carbs( g)": "1.1"
    },
    {
        "ID": "32",
        "Food": "egg boiled",
        "size": "1 piece",
        "fat( gms.)": "6.0",
        "Cholesterol( mgs)": "280.0",
        "calorie": "80.0",
        "protien( g)": "6.3",
        "carbs( g)": "0.6"
    },
    {
        "ID": "33",
        "Food": "egg fried",
        "size": "1 piece",
        "fat( gms.)": "11.0",
        "Cholesterol( mgs)": "280.0",
        "calorie": "120.0",
        "protien( g)": "6.8",
        "carbs( g)": "1.5"
    },
    {
        "ID": "34",
        "Food": "egg scrambled",
        "size": "1 piece",
        "fat( gms.)": "10.0",
        "Cholesterol( mgs)": "285.0",
        "calorie": "130.0",
        "protien( g)": "7.0",
        "carbs( g)": "1.5"
    },
    {
        "ID": "35",
        "Food": "Fried chicken",
        "size": "1 piece",
        "fat( gms.)": "43.7",
        "Cholesterol( mgs)": "20.0",
        "calorie": "563.0",
        "protien( g)": "7.7",
        "carbs( g)": "2.5"
    },
    {
        "ID": "36",
        "Food": "Chicken curry",
        "size": "150 gms",
        "fat( gms.)": "7.7",
        "Cholesterol( mgs)": "95.0",
        "calorie": "163.0",
        "protien( g)": "17.9",
        "carbs( g)": "4.6"
    },
    {
        "ID": "37",
        "Food": "fish curry",
        "size": "1 katori",
        "fat( gms.)": "9.7",
        "Cholesterol( mgs)": "30.0",
        "calorie": "158.0",
        "protien( g)": "14.5",
        "carbs( g)": "3.5"
    },
    {
        "ID": "38",
        "Food": "prawns curry",
        "size": "145 gms",
        "fat( gms.)": "7.0",
        "Cholesterol( mgs)": "160.0",
        "calorie": "139.0",
        "protien( g)": "15.4",
        "carbs( g)": "5.6"
    },
    {
        "ID": "39",
        "Food": "apple",
        "size": "1 piece",
        "fat( gms.)": "0.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "60.0",
        "protien( g)": "0.2",
        "carbs( g)": "15.0"
    },
    {
        "ID": "40",
        "Food": "mango",
        "size": "1 piece",
        "fat( gms.)": "0.4",
        "Cholesterol( mgs)": "0.0",
        "calorie": "120.0",
        "protien( g)": "1.0",
        "carbs( g)": "28.4"
    },
    {
        "ID": "41",
        "Food": "banana",
        "size": "1 piece",
        "fat( gms.)": "0.3",
        "Cholesterol( mgs)": "0.0",
        "calorie": "100.0",
        "protien( g)": "1.2",
        "carbs( g)": "27.5"
    },
    {
        "ID": "42",
        "Food": "coconut",
        "size": "1 piece",
        "fat( gms.)": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "155.0",
        "protien( g)": "1.5",
        "carbs( g)": "4.4"
    },
    {
        "ID": "43",
        "Food": "orange",
        "size": "1 piece",
        "fat( gms.)": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "65.0",
        "protien( g)": "0.9",
        "carbs( g)": "14.3"
    },
    {
        "ID": "44",
        "Food": "peanuts",
        "size": "30 gms",
        "fat( gms.)": "16.8",
        "Cholesterol( mgs)": "0.0",
        "calorie": "170.0",
        "protien( g)": "7.7",
        "carbs( g)": "4.8"
    },
    {
        "ID": "45",
        "Food": "cashewnuts",
        "size": "30 gms",
        "fat( gms.)": "16.7",
        "Cholesterol( mgs)": "0.0",
        "calorie": "178.0",
        "protien( g)": "5.5",
        "carbs( g)": "9.9"
    },
    {
        "ID": "46",
        "Food": "butter",
        "size": "5 gms",
        "fat( gms.)": "4.1",
        "Cholesterol( mgs)": "12.0",
        "calorie": "35.0"
    },
    {
        "ID": "47",
        "Food": "gulab jamun",
        "size": "1 pieces",
        "fat( gms.)": "15.0",
        "Cholesterol( mgs)": "31.0",
        "calorie": "280.0",
        "protien( g)": "2.5",
        "carbs( g)": "22.1"
    },
    {
        "ID": "48",
        "Food": "rasgulla",
        "size": "1 pieces",
        "fat( gms.)": "0.4",
        "Cholesterol( mgs)": "1.8",
        "calorie": "110.0",
        "protien( g)": "3.4",
        "carbs( g)": "10.3"
    },
    {
        "ID": "49",
        "Food": "jalebi",
        "size": "100 gms",
        "fat( gms.)": "15.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "263.0",
        "protien( g)": "2.2",
        "carbs( g)": "30.6"
    },
    {
        "ID": "50",
        "Food": "chocolate",
        "size": "25 gms",
        "fat( gms.)": "9.0",
        "Cholesterol( mgs)": "5.0",
        "calorie": "145.0",
        "protien( g)": "1.7",
        "carbs( g)": "13.9"
    }
]

export default data;