package com.chocolate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/api/cliente"})
public class ClienteController {
    @Autowired
    ClienteService service;

    @GetMapping
    public List<Cliente> listar(){
        return service.listar();
    }
    @PostMapping
    public Cliente adicionar(@RequestBody Cliente p){
        return service.add(p);
    }
    @GetMapping(path = {"/{id}"})
    public Cliente listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Cliente editar(@RequestBody Cliente p, @PathVariable("id") int id){
        p.setId(id);
        return service.edit(p);
    }
    @DeleteMapping(path = {"/{id}"})
    public Cliente delete(@PathVariable("id") int  id){
        return service.delete(id);
    }
}
