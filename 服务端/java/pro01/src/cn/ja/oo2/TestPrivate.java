package cn.ja.oo2;

public class TestPrivate {
    private int id;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public static void main(String[] args) {
        ChildPrivate c = new ChildPrivate();
        c.say();
    }
}
class ChildPrivate extends TestPrivate {
    void say(){
        setId(12);
        System.out.println(getId());
    }
}
