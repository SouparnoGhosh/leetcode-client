export const initialCode = `class Solution {
    private List<String> ans;
    private StringBuilder cur;
    
    public void bt(int open, int close, int n) {
        if (open == n && close == n) {
            ans.add(cur.toString());
            return;
        }
        
        if (open < n) {
            cur.append('(');
            bt(open+1, close, n);
            cur.deleteCharAt(cur.length()-1);
        }
        
        if (close < open) {
            cur.append(')');
            bt(open, close+1, n);
            cur.deleteCharAt(cur.length()-1);
        }
        
        return;
    }
    
    public List<String> generateParenthesis(int n) {
        ans = new ArrayList<String>();
        cur = new StringBuilder();
        
        bt(0, 0, n);
        return ans;
    }
}`;
