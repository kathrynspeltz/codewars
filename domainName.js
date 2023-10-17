/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name */

function domainName(url) {
    let newUrl
    if (url.includes("www.")) {
        newUrl = url.split("www.").pop()
    } else if (url.includes("//")) {
        newUrl = url.split("//").pop()
    } else {
        newUrl = url
    }
    newUrl = newUrl.split(".")
    return newUrl[0]
}

console.log(domainName("www.example.com"))
console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))