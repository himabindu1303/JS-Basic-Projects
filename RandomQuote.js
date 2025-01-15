const Quotes =  [
    "Do the best you can. No one can do more than that",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "The road to success and the road to failure are almost exactly the same.",
    "In the end, we only regret the chances we didn’t take.",
    "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
    "You miss 100% of the shots you don’t take.",
    "It always seems impossible until it’s done.",
    "The secret of getting ahead is getting started.",
    "Everything you can imagine is real.",
    "Whatever you are, be a good one.",
    "I never dreamt of success. I worked for it.",
    "The most certain way to succeed is always to try just one more time.",
    "If you get tired, learn to rest, not to quit.",
    "Always do your best. What you plant now, you will harvest later.",
    "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
    "Believe you can and you're halfway there.",
    "It is never too late to be what you might have been.",
    "Give light and people will find the way.",
    "If you're having fun, that's when the best memories are built.",
    "If you prioritize yourself, you are going to save yourself."
];

let div1 = document.querySelector("#div1")

function RandomQuote(){
    let singlequote = Math.floor(Math.random() * Quotes.length)
    div1.textContent = Quotes[singlequote]
    div1.style.padding = "15px"
}