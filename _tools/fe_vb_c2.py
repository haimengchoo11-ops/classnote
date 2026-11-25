

def c2():
    h2("Transaction Calculation（15 分）", "C2")
    question_box("Mini Market Checkout", "15",
                 "A mini market checkout program reads item name, unit price, quantity, member status (CheckBox) and amount paid. It calculates the bill and displays a receipt.",
                 ["Discount rules:",
                  "•  gross < RM100: 0%",
                  "•  RM100 to RM299.99: 5%",
                  "•  RM300 and above: 10%",
                  "Members receive an additional 5% discount on the amount after the first discount.",
                  "SST of 6% is charged on the amount after all discounts.",
                  "The payment must be enough; calculate the change. Validate numeric input and display a receipt in a MessageBox.  (15M)"])

    h3("先算一遍：把公式和数字对齐")
    table(["Step", "Formula", "Example (price 25.90, qty 12, member)"],
          [["Gross", "price × quantity", "25.90 × 12 = 310.80"],
           ["Discount 1", "gross × 10%", "31.08"],
           ["After discount 1", "gross − discount 1", "279.72"],
           ["Member extra", "after 1 × 5%", "13.99"],
           ["Net", "gross − total discount", "310.80 − 45.07 = 265.73"],
           ["SST", "net × 6%", "15.94"],
           ["Total", "net + SST", "281.67"],
           ["Change", "paid − total", "300.00 − 281.67 = 18.33"]],
          widths=[4.2, 5.2, 7.6], size=8.5)

    h3("Step 1 · 输入验证（3M）")
    code_block(r'''Public Class CheckoutForm
    Private Sub btnCalculate_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnCalculate.Click

        Dim price As Decimal
        Dim qty As Integer
        Dim paid As Decimal

        If Not Decimal.TryParse(txtPrice.Text, price) _
                OrElse price <= 0D Then
            MessageBox.Show("Enter a valid unit price.", "Input Error", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtPrice.Focus()
            Exit Sub
        End If

        If Not Integer.TryParse(txtQuantity.Text, qty) _
                OrElse qty <= 0 Then
            MessageBox.Show("Enter a valid quantity.", "Input Error", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtQuantity.Focus()
            Exit Sub
        End If''', "TryParse + OrElse 短路的组合；不要直接 Parse")

    h3("Step 2 · Gross -> Discount -> SST -> Total（8M）")
    code_block(r'''        Dim gross As Decimal = price * qty
        Dim rate As Decimal

        If gross >= 300D Then
            rate = 0.1D
        ElseIf gross >= 100D Then
            rate = 0.05D
        Else
            rate = 0D
        End If

        Dim discount As Decimal = Decimal.Round(gross * rate, 2)

        If chkMember.Checked Then
            discount += Decimal.Round((gross - discount) * 0.05D, 2)
        End If

        Dim net As Decimal = gross - discount
        Dim sst As Decimal = Decimal.Round(net * 0.06D, 2)
        Dim total As Decimal = net + sst''', "先算第一段 discount，再用 gross - discount 算 member")

    h3("Step 3 · Payment -> Change -> Receipt（4M）")
    code_block(r'''        If Not Decimal.TryParse(txtPaid.Text, paid) Then
            MessageBox.Show("Enter a valid payment amount.", "Input Error", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtPaid.Focus()
            Exit Sub
        End If

        If paid < total Then
            MessageBox.Show("Payment is not enough. Total is " & _
                            total.ToString("C2"), "Payment Error", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtPaid.Focus()
            Exit Sub
        End If

        Dim change As Decimal = paid - total

        Dim receipt As String = _
            "MINI MARKET" & Environment.NewLine & _
            "------------------------------" & Environment.NewLine & _
            "Item      : " & txtItem.Text & Environment.NewLine & _
            "Price     : " & price.ToString("C2") & Environment.NewLine & _
            "Quantity  : " & qty.ToString() & Environment.NewLine & _
            "Gross     : " & gross.ToString("C2") & Environment.NewLine & _
            "Discount  : -" & discount.ToString("C2") & Environment.NewLine & _
            "Net       : " & net.ToString("C2") & Environment.NewLine & _
            "SST (6%)  : " & sst.ToString("C2") & Environment.NewLine & _
            "TOTAL     : " & total.ToString("C2") & Environment.NewLine & _
            "Paid      : " & paid.ToString("C2") & Environment.NewLine & _
            "Change    : " & change.ToString("C2")

        MessageBox.Show(receipt, "Payment Receipt", _
                        MessageBoxButtons.OK, MessageBoxIcon.Information)
        lblTotal.Text = total.ToString("C2")
    End Sub''', "C2 格式：total.ToString(\"C2\")；换行用 Environment.NewLine")

    h3("Step 4 · Clear / Exit（1M）")
    code_block(r'''    Private Sub btnClear_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnClear.Click
        txtItem.Clear()
        txtPrice.Clear()
        txtQuantity.Clear()
        txtPaid.Clear()
        chkMember.Checked = False
        lblTotal.Text = "RM 0.00"
        txtItem.Focus()
    End Sub

    Private Sub btnExit_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub
End Class''', "清空输入 + 重置 CheckBox + 焦点回到第一项")

    h3("Sample receipt")
    code_block(r'''MINI MARKET
------------------------------
Item      : A4 Paper
Price     : RM 25.90
Quantity  : 12
Gross     : RM 310.80
Discount  : -RM 45.07
Net       : RM 265.73
SST (6%)  : RM 15.94
TOTAL     : RM 281.67
Paid      : RM 300.00
Change    : RM 18.33''', "SAMPLE OUTPUT", lang="TEXT")

    h3("评分点（15M）")
    table(["评分点", "分值", "阅卷人看什么"],
          [["Validate price / quantity", "2", "TryParse + > 0 + 友好 MessageBox"],
           ["Gross", "1", "price * qty，用 Decimal"],
           ["Discount rules", "4", "If / ElseIf / Else，三档正确"],
           ["Member extra 5%", "1", "在 gross - discount 之后算"],
           ["SST + total", "3", "net * 6%，total = net + SST"],
           ["Payment + change", "2", "paid < total 检查，change = paid - total"],
           ["Receipt", "1", "MessageBox + C2 + 换行"],
           ["Clear / Exit", "1", "清空、重置、关闭"]],
          widths=[5.0, 1.6, 10.4], size=8.5, align_center_cols=(1,))

    h3("如果 case study 换成别的 transaction")
    table(["场景", "核心公式", "容易考的点"],
          [["Hotel booking", "nights × room rate + extra bed − deposit", "seasonal surcharge、deposit、balance"],
           ["Restaurant bill", "qty × price + 10% service charge + 6% tax", "service charge 先于 tax"],
           ["Tuition fee", "credit hours × rate + international surcharge − discount", "international 10%、discount 只一次"],
           ["Parking / utility", "units × rate，tiered rates", "If / ElseIf 分段，类似 electricity bill"]],
          widths=[4.6, 8.0, 4.4], size=8.4)

    h3("考场提醒", color=AMBER)
    bullets([
        "**金额一律 Decimal。** 不要用 Integer（会丢小数）或 Double（会有浮点误差）。",
        "**先验证再算。** TryParse 失败就 Exit Sub；不要先乘再报错。",
        "**Discount 顺序不要反。** 先按 gross 算第一段，再用 gross - discount 算 member 的 5%。",
        "**SST 是在 net 之后。** 不是 gross × 6%；题目说 after all discounts，就按 net 算。",
        "**付款不足要先检查。** If paid < total Then ... Exit Sub；不要先减出负数。",
        "**输出用 C2 + Environment.NewLine。** 一行一个字段，receipt 才像 receipt。"])


