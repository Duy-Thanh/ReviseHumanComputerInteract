namespace CloudIDE_
{
    partial class Password
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            label1 = new Label();
            txtPasswordVerify = new TextBox();
            button1 = new Button();
            btnSubmit = new Button();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(23, 23);
            label1.Name = "label1";
            label1.Size = new Size(447, 15);
            label1.TabIndex = 0;
            label1.Text = "You are entering development mode. Please confirm that you have that permission:";
            // 
            // txtPasswordVerify
            // 
            txtPasswordVerify.Location = new Point(23, 57);
            txtPasswordVerify.Name = "txtPasswordVerify";
            txtPasswordVerify.Size = new Size(479, 23);
            txtPasswordVerify.TabIndex = 1;
            // 
            // button1
            // 
            button1.Location = new Point(443, 109);
            button1.Name = "button1";
            button1.Size = new Size(75, 23);
            button1.TabIndex = 2;
            button1.Text = "Cancel";
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // btnSubmit
            // 
            btnSubmit.Location = new Point(362, 109);
            btnSubmit.Name = "btnSubmit";
            btnSubmit.Size = new Size(75, 23);
            btnSubmit.TabIndex = 3;
            btnSubmit.Text = "Submit";
            btnSubmit.UseVisualStyleBackColor = true;
            btnSubmit.Click += btnSubmit_Click;
            // 
            // Password
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(530, 144);
            ControlBox = false;
            Controls.Add(btnSubmit);
            Controls.Add(button1);
            Controls.Add(txtPasswordVerify);
            Controls.Add(label1);
            FormBorderStyle = FormBorderStyle.FixedSingle;
            Name = "Password";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Toggle Development Mode";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label label1;
        private TextBox txtPasswordVerify;
        private Button button1;
        private Button btnSubmit;
    }
}