import {State} from '../../types'

function operand(state: State): string {
  return state.operator ? state.operand2 : state.operand1
}

function isDecimal(operand: string): boolean {
  return operand.indexOf('.') !== -1
}

export function decimal(state: State): State {  
  let operand1  = state.operand1
  let operand2  = state.operand2
  let operator  = state.operator
  let notDecimal = !isDecimal(operand(state))

  if (operator && operand2 && notDecimal)
    operand2 += '.'
  if (operator && !operand2 && notDecimal)
    operand2 = '0' + '.'
  if (!operator && operand1 && notDecimal)
    operand1 += '.'
  if (!operator && !operand1 && notDecimal)
    operand1 = '0' + '.'

  return {operand1, operand2, operator}
}