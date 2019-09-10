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
        if (capacity < 0){
            throw new RuntimeException("容器的容量不能为负数");
        } else if(capacity == 0){
            elementData = new Object[DEFAULT_CAPACITY];
        }else {
            elementData = new Object[capacity];
        }
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
    public void remove(E element){
        for(int i = 0; i < size; i++){
            if(element.equals(get(i))){
                remove(i);
            }
        }
    }
    public int size(){
        return size;
    }
    public boolean isEmpty(){
        return size == 0 ? true : false;
    }
    public void remove(int index){
        int l = elementData.length - 1 - index;
        if(l>0){
            System.arraycopy(elementData, index + 1,elementData,index, l);
        }
        elementData[--size] = null;
    }
    public static void main(String[] args) {
        TestMyCollection t = new TestMyCollection(20);
        for(int i = 0; i < 40; i++){
            t.add("sda"+i);
        }
        System.out.println(t.get(40));
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
    // set/get方法
    public E get(int index){
        checkRange(index);
        return (E)elementData[index];
    }
    public void set(E element, int index){
        checkRange(index);
        elementData[index] = element;
    }
    public void checkRange(int index){
        if (0 > index || index > size -1) {
            throw new RuntimeException("索引不合法");
        }
    }

}
