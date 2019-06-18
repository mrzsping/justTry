package cn.zsp.collection;

public class linkList<E> {
    private Node first;
    private Node last;
    private int size;
    // 新增
    public void add(E element){
        Node node = new Node(element);
        if(first == null){

            first = node;
            last = node;
        }else{
            node.preious = last;
            node.next = null;
            last.next = node;
            last = node;
        }
        size++;
    }

    public static void main(String[] args) {
        linkList<String> l = new linkList<>();
        l.add("a");
        System.out.println(l.get(0));
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
    // 获取
    public E get(int index){
        changeRange(index);
        Node temp = getNode(index);
        return temp == null ? null : (E)temp.element;
    }
    // 删除
    public void remove(int index){
        changeRange(index);
        Node temp = getNode(index);
        if(temp!=null){
            Node up = temp.preious;
            Node down = temp.next;
            if(up!=null){
                up.next = down;
            }
            if(down!=null){
                down.preious = up;
            }
            if(index==0){
                first = down;
            }
            if(index==size-1){
                last = up;
            }
        }
        size--;
    }
    // 公用 获取节点
    private Node getNode(int index) {
        changeRange(index);
        Node temp = null;
        if(index<(size>>1)){
            temp = first;
            for(int i = 0; i< index; i++){
                temp = temp.next;
            }
        }else{
            temp = last;
            for(int i = size-1; i> index; i--){
                temp = temp.preious;
            }
        }
        return temp;
    }
    // 插入节点
    public void add(int index, E element){
        changeRange(index);
        Node newNode = new Node(element);
        Node temp = getNode(index);
        if(temp!=null){
            Node up = temp.preious;
            up.next = newNode;
            newNode.preious = up;
            newNode.next = temp;
            temp.preious = newNode;
        }
//        size++;
    }
    private void changeRange(int index){
        if(index<0|| index>size-1){
            throw new RuntimeException("索引不合法");
        }
    }
}
