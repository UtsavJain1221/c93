import React from 'react';
import Login from '../Screens/Login' ;
import Transaction from '../Screens/Transaction';

import {Text,View,StyleSheets} from 'react-native';

export default class App extends Component{
    constructor(props){

        this.budgetAmount=document.getElementById("budget-amount");
        this.expenses = document.getElementById("expenses-amount");
        this.balance = documernt.getElementById("balance-amount");
        
        super(props);
        this.state={

        }
    }

    updateBudgetAmount(budget,expenses){
        this.budgetAmount.innerHTML = budget;
        this.expenses.innerHTML = expenses;
        this.balance.innerHTML = balance;
    }

    updateExpenseBalance(expense){
        this.expenses.innerHTML = expense;
        this.balance.innerHTML += this.budgetAmount.innerHTML.toString() - expenses  ;

    }
    
deleteExpense(delAmount){
        const expense = (this.expenses.innerHTML =
            this.expenses.innerHTML.toString()-delAmount
            );
            this.updateExpenseBalance(expense);
    }
}

class expenseItem {
    ParentList=[];
    constructor(pL){
   this.ParentList=pL;
   this.updateBalance();

    }

    updateBalance(){
        let expenseAmount=0;
        for(const item of this.ParentList){
            expenseAmount+= +item.amount;
        }

        const balObj  = new Balance ();
        balObj.updateExpenseBalance(expenseAmount);
    }

    deleteExpenseItem(eid){
        let ItemIndex=0;
        for(const item of this.ParentList){
            if(item.ID == eid){
                balObj.deleteExpense(Item.amount);
                break;
            }
        }
    }
}

