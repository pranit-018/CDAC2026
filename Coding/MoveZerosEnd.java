package assigenments;

import java.util.Scanner;

public class MoveZerosEnd {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int arr[] = new int[n];
		
		for(int i=0;i<arr.length;i++)
		{
			arr[i]=sc.nextInt();
		}
		
		int j=0;
		for(int i=0;i<arr.length;i++)
		{
			if(arr[i]!=0)
			{
				arr[j++]=arr[i];
			}
		}
		
		while(j<n)
		{
			arr[j++]=0;
		}
		
		for(int i=0; i<n; i++)
		{
			System.out.print(arr[i] + " ");
		}
		
		sc.close();
	}
}
