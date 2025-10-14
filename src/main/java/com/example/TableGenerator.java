package com.example;

import java.util.Random;

public class TableGenerator {

    private static final int ROWS = 5;
    private static final int COLS = 5;
    private static final int MIN_VALUE = -100;
    private static final int MAX_VALUE = 100;

    public String generateTableHtml() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        sb.append("<table id=\"myTable\">");
        for (int i = 0; i < ROWS; i++) {
            sb.append("<tr>");
            for (int j = 0; j < COLS; j++) {
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