package cn.zsp.collection;
// 自定义实现ArrayList
public class TestMyCollection<E>{
    private Object[] elementData;
    private int size;

    public static final int DEFAULT_CAPACITY = 10;
    public TestMyCollection(){
        elementData = new Object[DEFAULT_CAPACITY];
    }
    public TestMyCollection(int capacity){
        elementData = new Object[capacity];
    }
//    @Override
//    public String toString() {
//        StringBuilder sb = new StringBuilder();
//        sb.append("[");
//        for(int i = 0; i < size; i++){
//            sb.append(elementData[i] + ",");
//        }
//        sb.setCharAt(sb.length() - 1, ']');
//        return sb.toString();
//    }

    public void add(E element){
        // 扩容
        if (size == elementData.length) {
            Object[] newArray = new Object[elementData.length + (elementData.length>>1)];
            System.arraycopy(elementData,0, newArray,0, elementData.length);
            elementData = newArray;
        }
        elementData[size++] = element;
    }
    public static void main(String[] args) {
        TestMyCollection t = new TestMyCollection(20);
        for(int i = 0; i < 40; i++){
            t.add("sda"+i);
        }
        System.out.println(t);
    }
    public String toString(){
        StringBuilder b = new StringBuilder();
        b.append("[");
        for(int i = 0; i < size; i++){
            b.append(elementData[i] + ",");
        }
        b.setCharAt(elementData.length - 1, ']');

        return b.toString();
    }

}
