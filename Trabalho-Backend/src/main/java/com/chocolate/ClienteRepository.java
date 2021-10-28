package com.chocolate;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface ClienteRepository extends Repository<Cliente, Integer>{
    List<Cliente>findAll();
    Cliente findOne(int id);
    Cliente save(Cliente p);
    void delete(Cliente p);
}
