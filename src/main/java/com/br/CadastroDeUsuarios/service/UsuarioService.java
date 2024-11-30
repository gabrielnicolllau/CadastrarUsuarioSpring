package com.br.CadastroDeUsuarios.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.CadastroDeUsuarios.model.Usuario;
import com.br.CadastroDeUsuarios.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    protected UsuarioRepository usuarioRepository;

    public Usuario salvarUsuario(Usuario usuario) {

        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

}
