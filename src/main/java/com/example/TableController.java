package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TableController {

    @GetMapping("/")
    public String index(Model model) {
        TableGenerator tableGenerator = new TableGenerator(5, 5);
        String tableHtml = tableGenerator.generateTableHtml();
        model.addAttribute("tableHtml", tableHtml);
        return "index";
    }

    @GetMapping("/generate-table")
    @ResponseBody 
    public String generateTable(@RequestParam(defaultValue = "5") int rows,
                                @RequestParam(defaultValue = "5") int cols) {
        TableGenerator tableGenerator = new TableGenerator(rows, cols);
        return tableGenerator.generateTableHtml();
    }
}