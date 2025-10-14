package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TableController {

    private final TableGenerator tableGenerator = new TableGenerator();

    @GetMapping("/")
    public String index(Model model) {
        String tableHtml = tableGenerator.generateTableHtml();
        model.addAttribute("tableHtml", tableHtml);
        return "index";
    }
}