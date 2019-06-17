package cn.zsp.collection;

public class Node {
    Node preious;
    Node next;
    Object element;

    public Node(Node preious, Node next, Object element) {
        super();
        this.preious = preious;
        this.next = next;
        this.element = element;
    }

    public Node(Object element) {
        this.element = element;
    }
}
