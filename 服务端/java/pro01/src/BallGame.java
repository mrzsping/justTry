import java.awt.*;
import javax.swing.*;

public class BallGame extends JFrame{

    Image ball = Toolkit.getDefaultToolkit().getImage("images/1.png");
    Image desk = Toolkit.getDefaultToolkit().getImage("images/2.png");

    double x = 100;
    double y = 100;
    double degree = 3.14/3;

    boolean right = true;
    public void paint(Graphics g){
        g.drawImage(desk, 100,100, null);
        g.drawImage(ball,(int)x,(int)y, null);
        x = x + 10*Math.cos(degree);
        y = y + 10*Math.sin(degree);

        if(y>500 - 40 - 30 || y < 40 + 40){
            degree = -degree;
        }
        if(x>856 - 40 - 30 || x < 40){
            degree = 3.14 - degree;
        }

        if(right){
            x = x+1;
        }else{
            x = x-1;
        }
        if(x > 855 - 40 - 30){
            right = false;
        }else if(x < 0 + 40){
            right = true;
        }
    }
    void launchFrame(){

        setSize(856, 500);
        setLocation(50,50);
        setVisible(true);

        while (true){
            repaint();
            try{
                Thread.sleep(40);
            }catch (Exception e){
                e.printStackTrace();
            }
        }

    }
    // main方法入口
    public static void main(String[] args) {

        BallGame game = new BallGame();
        game.launchFrame();

    }
}
