public class TestConstructor {
    public static void main(String[] args) {
        Point p = new Point(3,4);
        Point o = new Point(0, 0);
        System.out.println(p.getDistance(o));
    }
}
class Point{
    double x;
    double y;
    public Point(double _x, double _y){
        x = _x;
        y = _y;
    }
    public double getDistance(Point p){
        return Math.sqrt((x-p.x)*(x-p.x) + (y-p.y)*(y-p.y));
    }
}
