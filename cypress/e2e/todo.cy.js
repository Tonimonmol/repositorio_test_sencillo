describe('Visitar TodoMVC React Dist', () => {

    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
    })

    it('Carga la página correctamente', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
    })
    
    it('añadir una tarea', () => {
      cy.get('[data-testid="text-input"]').click().type("comprar pan {enter}")
    })
    
    it('marcar una tarea', () => {
      cy.get('[data-testid="text-input"]').click().type("comprar pan {enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
    })

   
})
