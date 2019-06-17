package cn.zsp.collection;

public class linkList {
    private Node first;
    private Node last;
    private int size;

    public void add(Object obj){
        Node node = new Node(obj);
        if(first == null){

            first = node;
            last = node;
        }else{
            node.preious = last;
            node.next = null;
            last.next = node;
            last = node;
        }
    }

    public static void main(String[] args) {
        linkList l = new linkList();
        l.add("a");
        System.out.println(l.toSring());
    }
    public String toSring(){
        StringBuilder sb = new StringBuilder("[");
        Node temp = first;
        while (temp != null){
            sb.append(temp.element+",");
            temp = temp.next;
        }
        sb.setCharAt(sb.length() - 1, ']');
        return sb.toString();
    }


}
