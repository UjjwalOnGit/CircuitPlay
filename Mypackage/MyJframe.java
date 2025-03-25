package Mypackage;

import java.util.*;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class MyJframe {
        public MyJframe() {
                System.out.println("hello from MyJframe");
                JFrame frame = new JFrame("Circuit Play");
                JPanel panel = new JPanel();
                JLabel label = new JLabel("My dream project");
                ImageIcon imgicon = new ImageIcon("Mypackage/logoZommer.png");
                panel.add(label);
                frame.add(panel);
                frame.setIconImage(imgicon.getImage());
                frame.setSize(200, 300);
                frame.setLocationRelativeTo(null);
                frame.setVisible(true);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        }
}
