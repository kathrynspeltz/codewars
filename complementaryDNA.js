/*  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).  */


function dnaStrand(dna) {
    let complementaryDNA = ""
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == "A") {
            complementaryDNA += "T"
        } else if (dna[i] == "T") {
            complementaryDNA += "A"
        } else if (dna[i] == "C") {
            complementaryDNA += "G"
        } else if (dna[i] == "G") {
            complementaryDNA += "C"
        }
    }
    return complementaryDNA
}

console.log(dnaStrand("ATTGC"))
console.log(dnaStrand("GTAT"))