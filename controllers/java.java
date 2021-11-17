/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.nwmissouri.zoo07group.squad6;

import java.util.ArrayList;

/**
 *
 * @author Vijay kumar chunchu
 */
/**
 * 
 * VisitorServiceManager group for Squad6 App
 */
public class VisitorServiceManagerGroup {
     private static ArrayList<VisitorServiceManager>Vsm;
     public static int create() {
       Vsm = new ArrayList<>();
        
        VisitorServiceManager v = new VisitorServiceManager("Managing");
       Vsm.add(v);
       Vsm.add(new VisitorServiceManager("Shuttles"));
       Vsm.add(new VisitorServiceManager("tickets"));

        returnVsm.size();
    }
     public static void run() {
        System.out.println("####################");
        System.out.println("Hey - look at the Profession!");
       Vsm.forEach(VisitorServiceManager -> {
            VisitorServiceManager.experience();
            VisitorServiceManager.role();
            VisitorServiceManager.salary();
            VisitorServiceManager.Safety();
        });
        System.out.println("My VisitorServiceManager Attributes");
        System.out.println("#################");
    }

    
}