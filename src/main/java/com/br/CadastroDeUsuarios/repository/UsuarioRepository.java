package com.br.CadastroDeUsuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.CadastroDeUsuarios.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
