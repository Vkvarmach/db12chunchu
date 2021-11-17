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
 * Security group for Squad6 App
 */
public class SecurityGroup {
     private static ArrayList<Security>Secur;
     public static int create() {
       Secur = new ArrayList<>();
        
        Security s = new Security("MightyLion");
       Secur.add(s);
       Secur.add(new Security("MightyLion"));
       Secur.add(new Security("MightyLion"));

        returnSecur.size();
    }
     public static void run() {
        System.out.println("####################");
        System.out.println("Hey - look at the Profession!");
       Secur.forEach(Security -> {
            Security.experience();
            Security.role();
            Security.salary();
            Security.reports();
        });
        System.out.println("My Security Attributes");
        System.out.println("#################");
    }

    
}