import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod, fallBackText }) {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;

  if (expenses.length > 0) {
    content = (
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
    );
  }

  return (
    <View style={styles.container}>
      {content}
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
