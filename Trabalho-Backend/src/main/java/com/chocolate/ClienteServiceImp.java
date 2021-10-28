package com.chocolate;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteServiceImp implements ClienteService {
    @Autowired
    private ClienteRepository repositorio;
    
    @Override
    public List<Cliente> listar() {
        return repositorio.findAll();
    }

    @Override
    public Cliente listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Cliente add(Cliente p) {
        return repositorio.save(p);
    }

    @Override
    public Cliente edit(Cliente p) {
        return repositorio.save(p);
    }

    @Override
    public Cliente delete(int id) {
        Cliente p=repositorio.findOne(id);
        if(p!=null){
            repositorio.delete(p);
        }
       return p;
    }
    
    
    
}
