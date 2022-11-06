// Basically I need to turn the first string into a generic representation
// Then compare with the second to see if they'd be serialized the same way.

// With `egg` and `add`, it would be like saying 0-1-1 and 0-1-1 

// Reminds me of how Zip works, kind of

// I wonder if theres a clever optimized way to do this..

// "abcdefghijklmnopqrstuvwxyzva"
// "abcdefghijklmnopqrstuvwxyzck"

// getRepresentation('abcdefghijklmnopqrstuvwxyzva')
// "0_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_21_22_23_24_25_21_0_" 

// getRepresentation('abcdefghijklmnopqrstuvwxyzck')
// "0_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_21_22_23_24_25_2_10_" 

// Well fuck, I feel like my mind has been read. Okay, need to come up with a solution that doesn't have issues like this. Initially thought base 64 would be a good idea but too complicated so instead I think I'll just use the base alphabet.

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

// So `egg = abb` and `add = abb`

// This is probably slower, but fuck speeed. Right now I just wanna solve it. I'll reiterate later.

// Works! Time to read discuss!

function getRepresentation(str: string) {
    const dict = {}
    let rep = ''
    let ii = 0
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (dict[char] === undefined) {
            dict[char] = ii
            ii++
            // In theory, should never surpass ii=25 (26 letters)
        }
        // This works
        rep += `${dict[char]}_`
        // But this one should be faster but doesn't work, idk why
        // rep += dict[char].toString()
    }
    return rep
}

function isIsomorphic(s: string, t: string): boolean {
    // This makes it slower for some reason
    // if(s.length !== t.length)
    //     return false;
    return getRepresentation(s) === getRepresentation(t)
}


// Made this version for the memes since I saw someone write a oneliner in python
// function isIsomorphic(s: string, t: string): boolean {
    
// }