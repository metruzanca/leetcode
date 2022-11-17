// This is a pointer problem.
// s is a checklist of characters we need, loop thru t looking for s
// Since order matters, we just need to loop thru t till the end

function isSubsequence(substring, string) {
    let currentS = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === substring[currentS]) currentS++
    }
    return currentS === substring.length
}

// To address the follow up, I'd need to cache string in a hashmap probably. Though I've heard you can also do it with a binary search tree.

// function isSubsequence(substring, string) {
    
// }
