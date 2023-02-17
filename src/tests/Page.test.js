import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home";


// testando a parte de filtragens, se contém todos od botoões na página e o input de buscas

describe("Input", () => {
    test("Deve conter o Input para que o usuário procure por um produto", () => {
      render(<Home />);
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
    });
  });

describe("categorias", () => {
  test("Deve conter o texto 'categoria de produtos'", () => {
    render(<Home />);
    screen.getByRole("heading", {
      name: /categorias de produtos/i,
    });
  });
});

describe("Botão com opção de todas categorias", () => {
  test("Deve conter o botão 'todas as categorias'", () => {
    render(<Home />);
    screen.getByRole("button", {
      name: /todas as categorias/i,
    });
  });
});

describe("Botão com opção Roll on", () => {
    test("Deve conter o botão com a opção 'Roll On'", () => {
      render(<Home />);
      screen.getByRole("button", {
        name: /Roll on/i,
      });
    });
  });

  describe("Botão com opção Alcohol en Gel", () => {
    test("Deve conter o botão com a opção 'Alcohol en Gel'", () => {
      render(<Home />);
      screen.getByRole("button", {
        name: /Alcohol en Gel/i,
      });
    });
  });

  describe("Botão com opção Aerosol", () => {
    test("Deve conter o botão com a opção 'Aerosol", () => {
      render(<Home />);
      screen.getByRole("button", {
        name: /Aerosol/i,
      });
    });
  });

  describe("Botão com opção Jábon Líquido", () => {
    test("Deve conter o botão com a opção 'Jábon Líquido'", () => {
      render(<Home />);
      screen.getByRole('button', {
        name: /jabón líquido/i
      })
    });
  });

  describe("Botão com opção Crema Soft Solid", () => {
    test("Deve conter o botão com a opção 'Soft Solid'", () => {
      render(<Home />);
      screen.getByRole("button", {
        name: /Soft Solid/i,
      });
    });
  });

  describe("Botão com opção Talco", () => {
    test("Deve conter o botão com a opção 'Talco'", () => {
      render(<Home />);
      screen.getByRole("button", {
        name: /Talco/i,
      });
    });
  });


  describe("verificação da página inicial", () => {
    test("Verificando se na página inicial contém 33 Produtos", () => {
      render(<Home />);
      screen.getByRole('heading', {
        name: /33 resultados/i
      })
    });
  });


