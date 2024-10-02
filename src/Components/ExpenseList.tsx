interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div className="table-auto max-w-md mx-auto">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Description
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Amount
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500">
                Category
              </p>
            </th>
            <th className="p-4 border-b border-slate-300 bg-slate-50">
              <p className="block text-sm font-normal leading-none text-slate-500"></p>
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  {expense.description}
                </p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">{expense.amount}</p>
              </td>
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">
                  {expense.category}
                </p>
              </td>
              <td>
                <button
                  className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                  type="button"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="font-bold">
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ExpenseList;
