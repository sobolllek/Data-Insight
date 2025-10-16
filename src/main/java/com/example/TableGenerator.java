package com.example;

import java.util.Random;

public class TableGenerator {

    private final int rows;
    private final int cols;
    private static final int MIN_VALUE = -100;
    private static final int MAX_VALUE = 100;

    public TableGenerator(int rows, int cols) {
        this.rows = Math.max(1, Math.min(rows, 10)); 
        this.cols = Math.max(1, Math.min(cols, 10));
    }
    
    public TableGenerator() {
        this(5, 5);
    }

    public String generateTableHtml() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        sb.append("<table id=\"myTable\">");
        for (int i = 0; i < rows; i++) { 
            sb.append("<tr>");
            for (int j = 0; j < cols; j++) { 
                int value = random.nextInt(MAX_VALUE - MIN_VALUE + 1) + MIN_VALUE;
                while (value == 0) {
                    value = random.nextInt(MAX_VALUE - MIN_VALUE + 1) + MIN_VALUE;
                }
                sb.append("<td>").append(value).append("</td>");
            }
            sb.append("</tr>");
        }
        sb.append("</table>");
        return sb.toString();
    }
}