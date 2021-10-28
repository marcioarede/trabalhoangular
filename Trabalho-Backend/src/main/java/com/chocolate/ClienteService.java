package com.chocolate;
import java.util.List;

public interface ClienteService {
    List<Cliente>listar();
    Cliente listarId(int id);
    Cliente add(Cliente p);
    Cliente edit(Cliente p);
    Cliente delete(int id);
}
