class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const len = s.length;

        if(len !== t.length) {
            return false;
        }

        const counts = new Array(26).fill(0);

        for(let i = 0; i <= len - 1; i++) {
            counts[s[i].charCodeAt(0) - 97]++;
            counts[t[i].charCodeAt(0) - 97]--;
        }

        return counts.every(el => !el)
    }
}
