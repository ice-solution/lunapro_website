Text file: routers.ts
Latest content with line numbers:
2	import { getSessionCookieOptions } from "./_core/cookies";
3	import { systemRouter } from "./_core/systemRouter";
4	import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
5	import { z } from "zod";
6	import { 
7	  getAllProducts, 
8	  getProductById, 
9	  getProductsByCategory,
10	  getAllCategories,
11	  getAllMembershipTiers,
12	  getMemberByUserId,
13	  createMember,
14	  updateMemberStatus,
15	  getOrdersByMemberId,
16	  getOrderById,
17	  getOrderItemsByOrderId,
18	  createOrder,
19	  createOrderItem,
20	  createInquiry,
21	  getAllInquiries
22	} from "./db";
23	import { nanoid } from "nanoid";
24	
25	export const appRouter = router({
26	  system: systemRouter,
27	
28	  auth: router({
29	    me: publicProcedure.query(opts => opts.ctx.user),
30	    logout: publicProcedure.mutation(({ ctx }) => {
31	      const cookieOptions = getSessionCookieOptions(ctx.req);
32	      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
33	      return {
34	        success: true,
35	      } as const;
36	    }),
37	  }),
38	
39	  // Product Management
40	  products: router({
41	    list: publicProcedure.query(async () => {
42	      return await getAllProducts();
43	    }),
44	    
45	    getById: publicProcedure
46	      .input(z.object({ id: z.string() }))
47	      .query(async ({ input }) => {
48	        return await getProductById(input.id);
49	      }),
50	    