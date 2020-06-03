class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        
        for r in ransomNote:
            if r in magazine:
                ransomNote.remove(r)
                magazine.remove(r)
            else:
                return False
        return len(ransomNote) == 0