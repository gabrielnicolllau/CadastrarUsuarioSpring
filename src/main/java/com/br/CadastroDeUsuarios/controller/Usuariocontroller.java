package com.br.CadastroDeUsuarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.CadastroDeUsuarios.model.Usuario;
import com.br.CadastroDeUsuarios.service.UsuarioService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuarios") // Define uma rota padrão para os GetMapping
public class Usuariocontroller {

    @Autowired
    private UsuarioService usuarioService;

    /**
     * Cria um novo usuário.
     * 
     * @param usuario o usuário a ser criado.
     * @return o usuário criado.
     */
    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@Valid @RequestBody Usuario usuario) {
        return ResponseEntity.status(201).body(usuarioService.salvarUsuario(usuario));
    }

    /**
     * Lista todos os usuários.
     * 
     * @return uma lista de todos os usuários.
     */
    @GetMapping()
    public ResponseEntity<List<Usuario>> listaUsuarios() {
        List<Usuario> lista = usuarioService.listarUsuarios();
        return ResponseEntity.status(200).body(lista);
    }

}
