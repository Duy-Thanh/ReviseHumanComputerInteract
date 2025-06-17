namespace CloudIDE_
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            close = new PictureBox();
            maximize = new PictureBox();
            minimize = new PictureBox();
            panel1 = new Panel();
            badge = new PictureBox();
            panel2 = new Panel();
            ((System.ComponentModel.ISupportInitialize)close).BeginInit();
            ((System.ComponentModel.ISupportInitialize)maximize).BeginInit();
            ((System.ComponentModel.ISupportInitialize)minimize).BeginInit();
            panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)badge).BeginInit();
            SuspendLayout();
            // 
            // close
            // 
            close.Anchor = AnchorStyles.Top | AnchorStyles.Right;
            close.Location = new Point(1384, 0);
            close.Name = "close";
            close.Size = new Size(43, 28);
            close.TabIndex = 0;
            close.TabStop = false;
            close.Click += close_Click;
            // 
            // maximize
            // 
            maximize.Anchor = AnchorStyles.Top | AnchorStyles.Right;
            maximize.Location = new Point(1341, 0);
            maximize.Name = "maximize";
            maximize.Size = new Size(43, 28);
            maximize.TabIndex = 1;
            maximize.TabStop = false;
            maximize.Click += maximize_Click;
            // 
            // minimize
            // 
            minimize.Anchor = AnchorStyles.Top | AnchorStyles.Right;
            minimize.Location = new Point(1298, 0);
            minimize.Name = "minimize";
            minimize.Size = new Size(43, 28);
            minimize.TabIndex = 2;
            minimize.TabStop = false;
            minimize.Click += minimize_Click;
            // 
            // panel1
            // 
            panel1.Anchor = AnchorStyles.Top | AnchorStyles.Left | AnchorStyles.Right;
            panel1.Controls.Add(badge);
            panel1.Location = new Point(0, 0);
            panel1.Name = "panel1";
            panel1.Size = new Size(1298, 28);
            panel1.TabIndex = 3;
            // 
            // badge
            // 
            badge.BackgroundImageLayout = ImageLayout.Center;
            badge.Location = new Point(0, 0);
            badge.Name = "badge";
            badge.Size = new Size(43, 28);
            badge.TabIndex = 4;
            badge.TabStop = false;
            badge.Click += badge_Click;
            // 
            // panel2
            // 
            panel2.Anchor = AnchorStyles.Top | AnchorStyles.Bottom | AnchorStyles.Left | AnchorStyles.Right;
            panel2.Location = new Point(0, 28);
            panel2.Name = "panel2";
            panel2.Size = new Size(1427, 876);
            panel2.TabIndex = 4;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.ControlLightLight;
            ClientSize = new Size(1427, 904);
            Controls.Add(panel2);
            Controls.Add(panel1);
            Controls.Add(minimize);
            Controls.Add(maximize);
            Controls.Add(close);
            FormBorderStyle = FormBorderStyle.None;
            Name = "Form1";
            Text = "CloudIDE+";
            ((System.ComponentModel.ISupportInitialize)close).EndInit();
            ((System.ComponentModel.ISupportInitialize)maximize).EndInit();
            ((System.ComponentModel.ISupportInitialize)minimize).EndInit();
            panel1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)badge).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private PictureBox close;
        private PictureBox maximize;
        private PictureBox minimize;
        private Panel panel1;
        private PictureBox badge;
        private Panel panel2;
    }
}
