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

    /**
     * Salva um novo usuário no banco de dados após validar o CPF e encriptar a
     * senha.
     * 
     * @param usuario O usuário a ser salvo.
     * @return O usuário salvo.
     * 
     */
    public Usuario salvarUsuario(Usuario usuario) {

        // Salva o usuário no repositório
        return usuarioRepository.save(usuario);
    }

    /**
     * Lista todos os usuários.
     * 
     * @return lista de todos os usuários.
     */
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

}
