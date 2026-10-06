package assigenments;

import java.util.Scanner;

public class EvenOddCount {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter An integer n:");
		int n = sc.nextInt();
		int evenCount=0, oddCount=0;
		int arr[] = new int[n];
		System.out.println("Enter an n integers:");
		
		for(int i=0;i<n;i++)
		{
			arr[i]= sc.nextInt();
			if((arr[i]&1)==0)
				evenCount++;
			else
				oddCount++;
			
					
		}
		
		System.out.println("Even = " + evenCount);
		System.out.println("Odd = " + oddCount);
		
		sc.close();

		
	}
}
