// Maintained `s` and `t` initials but renamed to `subString` and `totalString`
// This way I have good variables names and don't confuse myself if I read the problem statement
// _`totalString` makes little sense, but \U0001f937‍ i didn't name it `t`_

// This is a pointer problem.
// s is a checklist of characters we need, loop thru t looking for s
// Since order matters, we just need to loop thru t till the end

// function isSubsequence(substring, totalString) {
//     let currentS = 0
//     for (let i = 0; i < totalString.length; i++) {
//         if (totalString[i] === substring[currentS]) currentS++
//     }
//     return currentS === substring.length
// }

// To address the follow up, I'd need to cache string in a hashmap probably. Though I've heard you can also do it with a binary search tree.


// For "aabbcc" produces { a: [0, 1], b: [2, 3], c: [4, 5] }
function optimizeTotal(totalString) {
    const optimizedTotal = {}
    for (let i = 0; i < totalString.length; i++) {
        const char = totalString[i]
        if (!optimizedTotal[char]) {
            optimizedTotal[char] = []
        }
        optimizedTotal[char].push(i)
    }
    return optimizedTotal
}

// With a functional style because I prefer a declarative DX

function createIsSubstring(totalString) {
    const optimizedTotal = optimizeTotal(totalString)

    return (substring) => {
        // let currentS = 0
        let currentT = -1
        for (let currentChar of substring) {
            // if (optimizedTotal[char]) return false
            const positions = optimizedTotal[currentChar]
            // Find would imply n^2, but since we're probably not looping over entire n, think this might be n*log(n)
            const index = positions?.find(v => v > currentT)
            if (index === undefined) return false
            currentT = index
        }
        return true
    }
}

// Look how easy to read this is...
function isSubsequence(substring, totalString) {
    const isSubstring = createIsSubstring(totalString)
    // Loop thru all incoming s
    return isSubstring(substring)
}

// isSubsequence('axc', "ahbgdc") 