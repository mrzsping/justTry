package cn.zsp.game;

import javax.swing.JFrame;
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class MyGameFrame extends JFrame {
    Image ball = GameUtil.getImage("images/ball.png");

    public void paint(Graphics g){
        g.drawImage(ball,200,200,null);
        Color c = g.getColor();
        g.setColor(c);
    }
    public void launchFrame(){ // 初始化窗口
        this.setTitle("打飞机");
        this.setVisible(true);
        this.setSize(500, 500);
        this.setLocation(300, 300);

        this.addWindowStateListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                super.windowClosed(e);
                System.exit(0);
            }
        });
    }
    public static void main(String[] args) {
        MyGameFrame f = new MyGameFrame();
        f.launchFrame();
    }
}
