import java.util.Scanner;
public class Task1 {
    public static void main(String[] args) {
        // scan the number
        Scanner in = new Scanner(System.in);
        try {
            System.out.println("Enter a number:  ");
            int rows = in.nextInt();
            // case num smaller than 1
            if (rows < 1) {
                System.out.println("Please enter a number larger than 0");
            } else {
                //Given an integer (height), output to the terminal a triangle with that height.
                printTriangle(rows);
            }
        }
        //exception handling
        catch(Exception e){
            System.out.println("Please enter a valid number");
            }
    }
    public static void printTriangle(int n)
    {
        //number of rows
        for (int i=0; i<n; i++)
        {

            //spaces
            for (int j=n-i; j>1; j--)
            {
                System.out.print(" ");
            }

            //columns and stars
            for (int j=0; j<=i; j++ )
            {
                System.out.print("* ");
            }

            // new lines
            System.out.println();
        }
    }
}