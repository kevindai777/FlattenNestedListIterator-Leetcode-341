//Java Solution

public class NestedIterator implements Iterator<Integer> {

    int index;
    List<Integer> arr;
    public NestedIterator(List<NestedInteger> nestedList) {
        index = 0;
        arr = new ArrayList<>();
        dfs(nestedList);
    }
    
    public void dfs(List<NestedInteger> nestedList) {
        for (NestedInteger element : nestedList) {
            if (element.isInteger()) {
                arr.add(element.getInteger());
            } else {
                dfs(element.getList());
            }
        }
    }

    @Override
    public Integer next() {
        return arr.get(index++);
    }

    @Override
    public boolean hasNext() {
        return arr.size() > index;
    }
}